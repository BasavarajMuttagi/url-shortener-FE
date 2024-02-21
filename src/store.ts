import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const storageModule = {
  name: "BabyLink-storage",
  storage: createJSONStorage(() => sessionStorage),
};

const creator = (set: any) => ({
  token: "",

  logout: () => {
    set(() => ({
      token: "",
    }));
  },
  setToken: (newToken: string) => set(() => ({ token: newToken })),
});

const useBabyLink = create(persist(creator, storageModule));
export default useBabyLink;
