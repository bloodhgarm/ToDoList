export const state = () => ({
    currentTask: [],
    taskLoaded: false
})
export const mutations = {
    GetTasks(state, payload) {
        state.currentTask = payload.filter(t => t.status === 'active')
        state.taskLoaded = true
    },
    DeleteTask(state, taskId) {
        const index = state.currentTask.findIndex(t => t.taskId === taskId)
        state.currentTask.splice(index, 1)
    },
    AddTaskToStore(state, task) {
        state.currentTask.push(task)
    }
}
export const actions = {
    async GettingTasks({ commit, state }, userId) {
        const tasks = await this.$fire.firestore.collection("currentTask").where("userId", "==", userId).get().then(res => {
            return res.docs.map(doc => doc.data())
        })
        if (!state.taskLoaded) commit('GetTasks', tasks)
    },
    DeleteTask({ commit }, taskId) {
        commit('DeleteTask', taskId)
        this.$fire.firestore.collection("currentTask").doc(taskId).delete().then(() => {
            console.log("Document successfully deleted!");
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    },
    async addTaskToBD({ commit }, task) {
        const mutateTask = {
            ...task,
            userId: this.state.authorization.user.uid
        }
        commit('AddTaskToStore', mutateTask)
        await this.$fire.firestore.collection("currentTask").doc(mutateTask.taskId).set(mutateTask).then((res) => {
            console.log("Document successfully written!", res);
        });
    }
}