import * as ACTIONS from "../constants"

export const addtoproduct = product => async(dispatch) => {
    try {
        dispatch({
            type: ACTIONS.ADD_TO_CART,
            payload: product
        })
    } catch (err) {
        console.log(err);
    }
}

export const removetoproduct = (productId) => async (dispatch) => {
  try {
    dispatch({
      type: ACTIONS.REMOVE_TO_CART,
      payload: productId,
    });
  } catch (err) {
    console.log(err);
  }
};