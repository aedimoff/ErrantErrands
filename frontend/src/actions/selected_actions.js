export const RECEIVE_SELECTED = "RECEIVE_SELECTED"
export const DELETE_SELECTED = "DELETE_SELECTED"

export const receiveSelected = (favorite) => ({
        type: RECEIVE_SELECTED,
        favorite
});

export const deleteSelected = (favorite) => ({
        type: DELETE_SELECTED,
        favorite
});


