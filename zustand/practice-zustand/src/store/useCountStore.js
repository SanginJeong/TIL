import {create} from 'zustand';



export const useCountStore = create((set,get) => (
  {
   count: 0,
   increase: () => set((state)=> ({count: state.count+1})),
   decrease: () => set((state)=> ({count: state.count-1})),
  }
))