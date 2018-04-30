import { store } from "../../src/flux/store";

test("Store creation", () => {
    expect(store).toBeDefined();
    expect(store.getState()).toEqual({
        todos: {},
        filter: "SHOW_ALL"
    });
});
