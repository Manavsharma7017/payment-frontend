import {atom} from "recoil"
export const message=atom({
    key : "message",
    default: ""
})
export const isLoggedIn = atom({
    key: "isLoggedIn",
    default: false
});