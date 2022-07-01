export const SET_COLOR = "SET_COLOR";
export const GET_COLOR = "GET_COLOR";
export const SET_COLOR_PEN = "SET_COLOR_PEN";
export const LIST_DATA = "LIST_DATA";
export const PATH_DATA = "PATH_DATA";

export function setColor(color) {
  return {
    type: "SET_COLOR",
    color: color,
  };
}

export function setColorPen(number) {
  return {
    type: "SET_COLOR_PEN",
    number: number,
    colorPen: [],
  };
}

export function getColorPen() {
  return {
    type: "GET_COLOR",
  };
}

export function listDataPush(listData) {
  return {
    type: "LIST_DATA",
    listData: listData,
  };
}

export function pathDataPush(path) {
  return {
    type: "PATH_DATA",
    path: path,
  };
}
