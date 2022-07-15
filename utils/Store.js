import Cookies from 'js-cookie';
import { createContext, useReducer } from 'react';

export const Store = createContext();
const initialState = {
  muscleGroupByDayState: [],
  dayCount: 1,
  dayList: ['DAY 1'],
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_MUSCLE_GROUP_BY_DAY':
      const { val, day } = action.payload;
      console.log('val-day: ', val + day);

      let muscleGroupList = initialState.muscleGroupByDayState;
      const item = muscleGroupList.find((x) => x.id === day);
      if (item) {
        item.muscleGroups = val;
      } else {
        muscleGroupList.push({
          id: day,
          muscleGroups: val,
          exercises: [],
        });
      }
      //ToDO: if user delete day after spesify muscles groups delete the day

      //   if (initialState.dayCount < muscleGroupList.length) {
      //     muscleGroupList = muscleGroupList.sort((a, b) => a.id - b.id); //sort by id
      //     muscleGroupList = muscleGroupList.slice(0, initialState.dayCount);
      //   }

      return { ...state, muscleGroupByDayState: muscleGroupList };
    case 'DAYS_ON_CHANGE':
      const { value } = action.payload;
      var days = [];
      for (var i = 0; i < value; i++) {
        days.push(i + 1);
      }
      //   if (initialState.dayCount > val) {
      //     let muscleGroupList = initialState.muscleGroupByDayState;
      //     muscleGroupList = muscleGroupList.sort((a, b) => a.id - b.id); //sort by id
      //     muscleGroupList = muscleGroupList.slice(0, value);
      //   }
      return {
        ...state,
        dayCount: value,
        dayList: days,
        // muscleGroupByDayState: muscleGroupList,
      };
    case 'ADD_EXERCISE_BY_DAY_AND_MUSCLE_GROUP':
      const { activeMuscle, exerciseDay, exerciseList } = action.payload;
      let exercisesObjectList = initialState.muscleGroupByDayState;
      const row = exercisesObjectList.find((x) => x.id == exerciseDay);
      console.log('exercises', exerciseList);
      if (row) {
        row.exercises = row.exercises.concat(exerciseList);
        row.exercises = row.exercises.filter(
          (item, pos) => row.exercises.indexOf(item) === pos
        );
      } else {
        console.log('cant find day ');
      }
      console.log(exercisesObjectList);
      return { ...state, muscleGroupByDayState: exercisesObjectList };
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
