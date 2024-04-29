export const CardItem = {
    props: {
        title: String,
        content: String,
        image_url: String,
        like: Number,
        id: Number,
        increase: Function
    },
    template: `
        <li :key="id">
            <h2>{{title}}</h2>
            <img :src="image_url" alt="">
            <p>{{content}}</p>
            <button v-on:click="increase(id)">
                {{like}} Like{{ like > 0 ? "s" : "" }}
            </button>
        </li>
    `,
    
}