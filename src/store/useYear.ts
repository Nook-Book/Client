import create from "zustand";

interface YearState {
  year: number;
  increaseYear: () => void;
  decreaseYear: () => void;
}

const yearDate = new Date();

const useYear = create<YearState>((set) => ({
  year: yearDate.getFullYear(),
  increaseYear: () => set((state) => ({ year: state.year + 1 })),
  decreaseYear: () => set((state) => ({ year: state.year - 1 })),
}));

export default useYear;
