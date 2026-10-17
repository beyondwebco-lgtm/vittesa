import { create } from 'zustand';

interface EnquiryModalState {
  isOpen: boolean;
  subject: string;
  notes: string;
  openEnquiryModal: (subject?: string, initialNotes?: string) => void;
  closeEnquiryModal: () => void;
}

export const useModalStore = create<EnquiryModalState>((set) => ({
  isOpen: false,
  subject: 'OLIVERA Collection',
  notes: '',
  openEnquiryModal: (subject = 'OLIVERA Collection', initialNotes = '') =>
    set({
      isOpen: true,
      subject,
      notes: initialNotes || `Enquiry regarding: ${subject}\n`,
    }),
  closeEnquiryModal: () => set({ isOpen: false }),
}));
