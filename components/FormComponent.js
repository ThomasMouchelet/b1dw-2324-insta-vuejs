export const FormComponent = {
    props: {
        handlesubmit: Function
    },
    data() {
        return {
            title: "",
            content: ""
        }
    },
    template: `
        <form @submit.prevent="handlesubmit(title, content)">
            <input type="text" placeholder="title" v-model="title">
            <input type="text" placeholder="content" v-model="content">
            <input type="submit" value="Submit">
        </form>
    `
}