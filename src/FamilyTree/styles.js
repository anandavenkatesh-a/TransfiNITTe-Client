export const lineColor = "peru";
export const personBoxColor = "peru";
export const personCardFillColor = "seagreen";
export const personCardTextColor = "beige";
export const lineThickness = 5;
export const descendantLength = 50;
export const marriageLineLength = 30;
export const personBoxWidth = 200;
export const personBoxHeight = 50;

export const horizontalLine = {
  width: descendantLength,
  height: lineThickness,
  backgroundColor: lineColor
};

export const descendantLine = {
  width: descendantLength,
  height: lineThickness,
  backgroundColor: lineColor
};

export const nonDescendantLine = Object.assign(
  {},
  descendantLine,
  {
    backgroundColor: "transparent"
  }
);

export const verticalLineContainer = {
  alignItems: "stretch",
  width: lineThickness,
  display: "flex",
  flexFlow: "column"
};

export const visibleVerticalLine = {
  backgroundColor: lineColor,
  flexGrow: 1,
  width: lineThickness,
};

export const hiddenVerticalLine = Object.assign(
  {},
  visibleVerticalLine,
  {
    backgroundColor: "transparent"
  }
);

export const verticalSeparator = {
  backgroundColor: lineColor,
  height: lineThickness,
  width: lineThickness
};

export const childrenList = {
  display: "flex"
};

export const personBox = {
  width: personBoxWidth,
  maxWidth: personBoxWidth,
  overflowX: "scroll",

  height: personBoxHeight,
  maxHeight: personBoxHeight,
  overflowY: "hidden",

  display: "flex",
  alignItems: "center",
};

export const personCard = {
  width: personBoxWidth - 10,
  height: personBoxHeight - 10,
  margin: "auto",

  borderStyle: "solid",
  borderColor: personBoxColor,
  borderWidth: 3,
  borderRadius: 5,

  backgroundColor: personCardFillColor,
  color: personCardTextColor,

  display: "flex",
  alignItems: "center"
};

export const hasMargin = {
  marginRight: 10,
};

export const coupleBox = {
  width: personBoxWidth,

  display: "flex",

  flexDirection: "column",
  flexWrap: "nowrap"
};

export const tree = {
  display: "flex",
  alignItems: "center"
};

export const jsonInput = {
  marginTop: 100,
  direction: "ltr"
};

export const person = {
  display: "flex",
  alignItems: "center"
};

export const marriageLine = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end"
};

export const marriageSpouse = {
  height: lineThickness,
  width: marriageLineLength,
  backgroundColor: lineColor
};

export const marriageConnect = {
  height: personBoxHeight / 5,
  width: lineThickness,
  backgroundColor: lineColor
};

export const marriageSymbol = {
  paddingTop: 5,
  paddingBottom: 5,
  paddingLeft: 5,
  marginLeft: "-.75em",
  color: "gold",
  fontWeight: "bold"
};

export const marriageLineContainer = {
  display: "flex"
};

export const marriageMargin = {
  width: 12,
  backgroundColor: "transparent"
};