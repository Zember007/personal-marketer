import axios from "axios";
import { ref, onMounted } from 'vue';

export function Upload(files) {

    const files_id = []

    const token = localStorage.getItem('accessToken')

    const config = {

        headers: { Authorization: `Bearer ${token}` }
    };

    files.forEach(element => {

        const data = new FormData()

        data.append('file', element)


        axios.post('/api/uploads/',
            data,
            config
        )
            .then((response) => {
                console.log(response);
                files_id.push(response.data.id)
            })
    });


    return files_id
}