export type LocationMapMeta = {
  slug: string;
  mapQuery: string;
  mapLabel: string;
  regionLabel: string;
  position: {
    top: string;
    left: string;
  };
};

export const locationMapData: Record<string, LocationMapMeta> = {
  mapusa: {
    slug: "mapusa",
    mapQuery: "Mapusa, Goa",
    mapLabel: "Mapusa, Goa",
    regionLabel: "North Goa",
    position: { top: "24%", left: "45%" },
  },
  "panaji-panjim": {
    slug: "panaji-panjim",
    mapQuery: "Panaji, Goa",
    mapLabel: "Panaji (Panjim), Goa",
    regionLabel: "North Goa",
    position: { top: "35%", left: "40%" },
  },
  "calangute-baga": {
    slug: "calangute-baga",
    mapQuery: "Calangute Baga, Goa",
    mapLabel: "Calangute & Baga, Goa",
    regionLabel: "North Goa",
    position: { top: "22%", left: "31%" },
  },
  candolim: {
    slug: "candolim",
    mapQuery: "Candolim, Goa",
    mapLabel: "Candolim, Goa",
    regionLabel: "North Goa",
    position: { top: "29%", left: "33%" },
  },
  porvorim: {
    slug: "porvorim",
    mapQuery: "Porvorim, Goa",
    mapLabel: "Porvorim, Goa",
    regionLabel: "North Goa",
    position: { top: "31%", left: "46%" },
  },
  "anjuna-vagator": {
    slug: "anjuna-vagator",
    mapQuery: "Anjuna Vagator, Goa",
    mapLabel: "Anjuna & Vagator, Goa",
    regionLabel: "North Goa",
    position: { top: "14%", left: "38%" },
  },
  bicholim: {
    slug: "bicholim",
    mapQuery: "Bicholim, Goa",
    mapLabel: "Bicholim, Goa",
    regionLabel: "North Goa",
    position: { top: "18%", left: "62%" },
  },
  margao: {
    slug: "margao",
    mapQuery: "Margao, Goa",
    mapLabel: "Margao, Goa",
    regionLabel: "South Goa",
    position: { top: "57%", left: "49%" },
  },
  "vasco-da-gama": {
    slug: "vasco-da-gama",
    mapQuery: "Vasco da Gama, Goa",
    mapLabel: "Vasco da Gama, Goa",
    regionLabel: "South Goa",
    position: { top: "47%", left: "27%" },
  },
  "colva-benaulim": {
    slug: "colva-benaulim",
    mapQuery: "Colva Benaulim, Goa",
    mapLabel: "Colva & Benaulim, Goa",
    regionLabel: "South Goa",
    position: { top: "64%", left: "44%" },
  },
  ponda: {
    slug: "ponda",
    mapQuery: "Ponda, Goa",
    mapLabel: "Ponda, Goa",
    regionLabel: "South Goa",
    position: { top: "53%", left: "62%" },
  },
  "canacona-palolem": {
    slug: "canacona-palolem",
    mapQuery: "Canacona Palolem, Goa",
    mapLabel: "Canacona (Palolem), Goa",
    regionLabel: "South Goa",
    position: { top: "85%", left: "43%" },
  },
};
