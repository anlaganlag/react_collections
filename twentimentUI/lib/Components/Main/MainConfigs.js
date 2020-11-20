import PageviewIcon from "@material-ui/icons/Pageview";
import InfoIcon from "@material-ui/icons/Info";
import { DataVisualizer } from "../DataVisualizer";
import MainAbout from "../MainAbout";
import MainElection from "../MainElection";
import { dateString, app } from "../../utils";

const MainConfigs = ({ query }) => [
  {
    value: "search",
    title: (query && query.search) || "Search Results",
    subtitle: query.search
      ? "Showing " + app.nameLowerCase + " results for " + query.search + "."
      : "Search for something (anything) and see how people are feeling about it.",
    subSubtitle:
      query.from || query.until
        ? query.from && query.until
          ? dateString(query.from) + " - " + dateString(query.until)
          : query.from
          ? dateString(query.from) + " - Now"
          : query.until
          ? dateString(query.until)
          : null
        : null,
    label: (query && query.search) || "Search Results",
    altLabel: <PageviewIcon />,
    Component: ({ pending, error, data }) => (
      <DataVisualizer pending={pending} error={error} {...data} />
    ),
  },
  {
    value: "election2020",
    title: "Election 2020",
    subtitle:
      "Track daily " +
      app.nameLowerCase +
      " results for the the 2020 Presidential Election.",
    label: "Election 2020",
    altLabel: "🇺🇸 2020",
    Component: () => <MainElection year="2020" />,
  },
  {
    value: "election2016",
    title: "Election 2016 Retrospective",
    subtitle:
      "Retrospective daily " +
      app.nameLowerCase +
      " tracker for the 2016 Presidential Election.",
    label: "Election 2016 Retro",
    altLabel: "🇺🇸 2016",
    Component: () => <MainElection year="2016" />,
  },
  {
    value: "about",
    title: app.nameUpperCase,
    subtitle: "Learn what it is and why it's so neat.",
    label: "About",
    altLabel: <InfoIcon />,
    Component: () => <MainAbout />,
  },
];

export default MainConfigs;
