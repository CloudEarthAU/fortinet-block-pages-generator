export interface PageType {
  name: string;
  fileName: string;
  details: {
    title: string;
    value: {
      default: string;
      variable: string;
    };
  }[];
  actions: {
    title: string;
    location: {
      default: string;
      variable: string;
    };
  }[];
}
