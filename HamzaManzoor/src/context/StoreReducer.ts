import actions from "./Actions";
const {GET_PROJECTS_DATA,GET_Client_DATA,GET_Faq_DATA,GET_Info_DATA } = actions

const reducer = (state: any, actions: { payload: any, type: string }) => {
    switch (actions.type) {
        case GET_PROJECTS_DATA:
            return { ...state, projectsData: actions.payload };
            case GET_Client_DATA:
            return { ...state, clientData: actions.payload };
            case GET_Faq_DATA:
            return { ...state, FaqData: actions.payload };
            case GET_Info_DATA:
            return { ...state, InfoData: actions.payload };
        default:
            return state
    }
}

export default reducer