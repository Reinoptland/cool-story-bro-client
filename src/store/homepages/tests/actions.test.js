import axios from "axios";
import {
  FETCH_HOMEPAGES_SUCCESS,
  fetchHomepagesSuccess,
  fetchHomepages,
} from "../actions";

jest.mock("axios");

describe("#fetchHomepagesSuccess", () => {
  describe("if given an array of homepages", () => {
    const homepages = [{}, {}];
    test("should return an action object", () => {
      const expected = {
        type: FETCH_HOMEPAGES_SUCCESS,
        payload: homepages,
      };

      expect(fetchHomepagesSuccess(homepages)).toEqual(expected);
    });
    test("the payload of whats returned should have the same length as the homepages array", () => {
      const action = fetchHomepagesSuccess(homepages);
      expect(action.payload).toHaveLength(homepages.length);
    });
  });
});

describe("#fetchHomepages", () => {
  describe("when called", () => {
    test("should dispatch an action FETCH_HOMEPAGES_SUCCESS", async () => {
      const fakeHomepages = [{}, {}];
      const response = { data: { homepages: { rows: fakeHomepages } } };
      axios.get.mockImplementationOnce(() => Promise.resolve(response));
      const dispatch = jest.fn();
      const getState = jest.fn().mockReturnValueOnce({ homepages: [] });
      await fetchHomepages()(dispatch, getState);
      expect(dispatch).toHaveBeenCalledWith(
        fetchHomepagesSuccess(fakeHomepages)
      );
      expect(getState).toHaveBeenCalledTimes(1);
    });
  });
});
