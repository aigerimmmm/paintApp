const initialAppState = {
  color: "#7FC325",
  colorPen: [
    { number: 1, isColor: true },
    { number: 2, isColor: false },
    { number: 3, isColor: false },
    { number: 4, isColor: false },
    { number: 5, isColor: false },
    { number: 6, isColor: false },
    { number: 7, isColor: false },
    { number: 8, isColor: false }
  ],
  widthColor: 30,
  path: [],
  listData: [],
};

const paintReducer = (state = initialAppState, action) => {
  switch (action.type) {
    case "SET_COLOR":
      return { ...state, color: action.color };
    case "PATH_DATA":
      return { ...state, path: [...state.path, action.path] };
    case "LIST_DATA":
      return { ...state, listData: [...state.listData, action.listData] };
    case "SET_COLOR_PEN":
      const indexReset = state.colorPen.findIndex(
        (item) => item.isColor == true
      );
      state.colorPen[indexReset].isColor = false;
      state.colorPen[action.number].isColor = true;
      return { ...state, colorPen: state.colorPen };
    case "GET_PEN":
      return { ...state, number: selectPen[indexReset].number };
    case "GET_COLOR":
      console.log(state.colorPen[action.number].isColor);
      return state.colorPen[action.number].isColor;
    default:
      return state;
  }
};

export default paintReducer;
