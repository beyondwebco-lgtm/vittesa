import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import { TrayItem } from '@/types/product';

export async function generateSpecificationPdf(items: TrayItem[]): Promise<Uint8Array> {
  const pdfDoc = await PDFDocument.create();
  let page = pdfDoc.addPage([595.28, 841.89]); // A4 format
  const { width, height } = page.getSize();

  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);

  // Header background & styling
  const primaryColor = rgb(0.08, 0.08, 0.08); // #141414
  const goldColor = rgb(0.67, 0.53, 0.35); // #AB8859
  const mutedColor = rgb(0.45, 0.45, 0.45);

  let y = height - 50;

  // Title
  page.drawText('VITTESA — PORCELAIN MAISON', {
    x: 50,
    y,
    size: 14,
    font: fontBold,
    color: primaryColor,
  });

  y -= 20;
  page.drawText('Project Specification Schedule', {
    x: 50,
    y,
    size: 11,
    font: fontBold,
    color: goldColor,
  });

  const dateStr = new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  page.drawText(`Generated: ${dateStr}`, {
    x: width - 180,
    y,
    size: 9,
    font: fontRegular,
    color: mutedColor,
  });

  y -= 30;

  // Horizontal divider
  page.drawLine({
    start: { x: 50, y },
    end: { x: width - 50, y },
    thickness: 1,
    color: rgb(0.85, 0.85, 0.85),
  });

  y -= 25;

  if (items.length === 0) {
    page.drawText('No items currently in cart.', {
      x: 50,
      y,
      size: 10,
      font: fontRegular,
      color: mutedColor,
    });
  } else {
    // Table Header
    page.drawText('CODE', { x: 50, y, size: 9, font: fontBold, color: primaryColor });
    page.drawText('PRODUCT NAME', { x: 130, y, size: 9, font: fontBold, color: primaryColor });
    page.drawText('COLLECTION', { x: 310, y, size: 9, font: fontBold, color: primaryColor });
    page.drawText('DIMENSIONS / SPEC', { x: 430, y, size: 9, font: fontBold, color: primaryColor });

    y -= 10;
    page.drawLine({
      start: { x: 50, y },
      end: { x: width - 50, y },
      thickness: 0.5,
      color: rgb(0.8, 0.8, 0.8),
    });

    y -= 20;

    for (const item of items) {
      if (y < 80) {
        page = pdfDoc.addPage([595.28, 841.89]);
        y = height - 50;
      }

      page.drawText(item.code || 'ASE-00', {
        x: 50,
        y,
        size: 9,
        font: fontRegular,
        color: mutedColor,
      });

      page.drawText(item.name, {
        x: 130,
        y,
        size: 9,
        font: fontBold,
        color: primaryColor,
      });

      page.drawText(item.collection || 'OLIVERA', {
        x: 310,
        y,
        size: 9,
        font: fontRegular,
        color: primaryColor,
      });

      page.drawText(item.dimensions || 'Standard', {
        x: 430,
        y,
        size: 9,
        font: fontRegular,
        color: primaryColor,
      });

      y -= 12;
      page.drawLine({
        start: { x: 50, y },
        end: { x: width - 50, y },
        thickness: 0.5,
        color: rgb(0.92, 0.92, 0.92),
      });
      y -= 16;
    }
  }

  // Footer
  const footerY = 40;
  page.drawLine({
    start: { x: 50, y: footerY + 15 },
    end: { x: width - 50, y: footerY + 15 },
    thickness: 0.5,
    color: rgb(0.85, 0.85, 0.85),
  });

  page.drawText('VITTESA — High Vitrified European Porcelain Tableware | enquiries@vittesa.com', {
    x: 50,
    y: footerY,
    size: 8,
    font: fontRegular,
    color: mutedColor,
  });

  return await pdfDoc.save();
}

export function downloadSpecificationPdf(items: TrayItem[], filename = 'vittesa-specification-schedule.pdf') {
  generateSpecificationPdf(items).then((pdfBytes) => {
    const blob = new Blob([pdfBytes as unknown as BlobPart], { type: 'application/pdf' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
    URL.revokeObjectURL(link.href);
  });
}
