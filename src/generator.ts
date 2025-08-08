import mustache from "mustache";

const DATA_BY_PAGE_TYPE = {
  fortiguard: {
    details: [
      {
        title: "URL",
        value: "%%PROTOCOL%%://%%URL%%",
      },
      {
        title: "Category",
        value: "%%CATEGORY%%",
      },
    ],
    fortiguard: true,
  },
  url: {},
  applicationcontrol: {},
  dlp: {},
  virus: {},
};
