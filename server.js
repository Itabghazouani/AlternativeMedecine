import { createServer, Model, Response } from "miragejs"


createServer({
    models: {
        doctors: Model,
        users: Model
    },

    seeds(server) {
        server.create("doctor", { id: "1", name: "Jackson Avery", price: 60, description: "Naturopathy is a holistic approach to wellness. The underlying principles of naturopathy are the importance of a healthy diet, clean fresh water, sunlight, exercise and stress management.", imageUrl: "https://static.wikia.nocookie.net/whumpapedia/images/4/40/Jackson_Avery.jpg", speciality: "naturopathy" })
        server.create("doctor", { id: "2", name: "Gregory House", price: 80, description: "Auriculotherapy is a health care modality whereby the external surface of the ear, or auricle, is stimulated to alleviate pathological conditions in other parts of the body.", imageUrl: "https://static.tvtropes.org/pmwiki/pub/images/oip_112.jpg", speciality: "auriculopathy" })
        server.create("doctor", { id: "3", name: "Lexie Grey", price: 100, description: "Naturopathy is a holistic approach to wellness. The underlying principles of naturopathy are the importance of a healthy diet, clean fresh water, sunlight, exercise and stress management.", imageUrl: "https://static.wikia.nocookie.net/greysanatomyxo/images/2/20/Lexie_Grey.jpg", speciality: "naturopathy" })
        server.create("doctor", { id: "4", name: "Shaun Murphy", price: 65, description: "Hypnotherapy is a form of psychotherapy that uses hypnosis to help treat a health concern, symptoms, or behavior. It may be effective for anxiety, postsurgical pain, insomnia, PTSD, addiction, IBS, and more.", imageUrl: "https://upload.wikimedia.org/wikipedia/en/8/89/Shaun_Murphy_Upper_Body.jpeg", speciality: "hypnotherapy" })
        server.create("doctor", { id: "5", name: "Christian Troy", price: 120, description: "Homeopathy, also known as homeopathic medicine, is a medical system that was developed in Germany more than 200 years ago. It's based on two unconventional theories: “Like cures like”—the notion that a disease can be cured by a substance that produces similar symptoms in healthy people.", imageUrl: "https://www.cryptoseries.fr/media/k2/items/cache/bbfb4faa18ee2951b02b656fb34be1d7_XL.jpg", speciality: "homeopathy" })
        server.create("doctor", { id: "6", name: "Maximilien Strauss", price: 70, description: "Hypnotherapy is a form of psychotherapy that uses hypnosis to help treat a health concern, symptoms, or behavior. It may be effective for anxiety, postsurgical pain, insomnia, PTSD, addiction, IBS, and more.", imageUrl: "https://tel.img.pmdstatic.net/scale/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2FTEL.2F2019.2F09.2F20.2F49ad2c72-fba3-4722-9c87-15e5fe358e1a.2Ejpeg/autox450/quality/65/crop-from/center/picture.jpeg", speciality: "hypnotherapy" })

        server.create("user", { id: "123", email: "i@g.com", password: "i1807", name: "Itab" })
    },

    routes() {
        this.namespace = "api"
        this.logging = false
        // this.timing = 2000  // => mock a 2 second delay in server response
        this.passthrough("https://firestore.googleapis.com/**")

        this.get("/doctors", (schema, request) => {
            // return new Response(400, {}, {error: "Error fetching data"})
            return schema.doctors.all()
        })

        this.get("/doctors/:id", (schema, request) => {
            const id = request.params.id
            return schema.doctors.find(id)
        })

        this.get("/host/doctors", (schema, request) => {
            // Hard-code the hostId for now
            return schema.doctors.where({ hostId: "123" })
        })

        this.get("/host/doctors/:id", (schema, request) => {
            // Hard-code the hostId for now
            const id = request.params.id
            return schema.doctors.findBy({ id, hostId: "123" })
        })

        this.post("/login", (schema, request) => {
            const { email, password } = JSON.parse(request.requestBody)
            // ⚠️ This is an extremely naive version of authentication. Please don't
            // do this in the real world, and never save raw text passwords
            // in your database 😅
            const foundUser = schema.users.findBy({ email, password })
            if (!foundUser) {
                return new Response(401, {}, { message: "No user with those credentials found!" })
            }

            // At the very least, don't send the password back to the client 😅
            foundUser.password = undefined
            return {
                user: foundUser,
                token: "Enjoy your pizza, here's your tokens."
            }
        })
    }
})
