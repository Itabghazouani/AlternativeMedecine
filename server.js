import { createServer, Model, Response } from "miragejs"


createServer({
    models: {
        doctors: Model,
        users: Model
    },

    seeds(server) {
        server.create("doctor", {
                                  id: 1,
                                  name: "Jackson Avery",
                                  price: 60,
                                  description: "Naturopathy is a holistic approach to wellness. The underlying principles of naturopathy are the importance of a healthy diet, clean fresh water, sunlight, exercise, and stress management.",
                                  imageUrl: "https://static.wikia.nocookie.net/whumpapedia/images/4/40/Jackson_Avery.jpg",
                                  speciality: "Naturopathy",
                                  phone: "+34 612 345 678",
                                  address: "Carrer d'En Robador, 81, 08001, Barcelona",
                                  email: "jackson.avery@example.com"
                                }
                      )
        server.create("doctor", {
                                  id: 2,
                                  name: "Isabella Martinez",
                                  price: 70,
                                  description: "Herbal medicine is a key aspect of Isabella Martinez's practice. She combines traditional knowledge with modern research to provide personalized herbal treatments for her patients.",
                                  imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                                  speciality: "Herbal Medicine",
                                  phone: "+34 654 321 987",
                                  address: "Plaça de Catalunya, 08002, Barcelona",
                                  email: "isabella.martinez@example.com"
                                }
                      )
        server.create("doctor", {
                                  id: 3,
                                  name: "Alejandro López",
                                  price: 55,
                                  description: "Acupuncture is Alejandro López's specialty. Using traditional Chinese medicine principles, he offers acupuncture treatments aimed at restoring balance and promoting natural healing.",
                                  imageUrl: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                                  speciality: "Acupuncture",
                                  phone: "+34 612 987 654",
                                  address: "Avinguda Diagonal, 08019, Barcelona",
                                  email: "alejandro.lopez@example.com"
                                }
                      )
        server.create("doctor", {
                                  id: 4,
                                  name: "Sofia Herrera",
                                  price: 65,
                                  description: "Homeopathy is Sofia Herrera's area of expertise. With a focus on individualized treatment, she uses highly diluted substances to stimulate the body's natural healing processes.",
                                  imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1588&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                                  speciality: "Homeopathy",
                                  phone: "+34 622 876 543",
                                  address: "Passeig de Gràcia, 08007, Barcelona",
                                  email: "sofia.herrera@example.com"
                                }
                      )
        server.create("doctor", {
                                  id: 5,
                                  name: "Javier Torres",
                                  price: 60,
                                  description: "Traditional Chinese Medicine is Javier Torres's specialty. He offers a holistic approach, including acupuncture, herbal medicine, and dietary therapy, to restore balance and promote well-being.",
                                  imageUrl: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                                  speciality: "Traditional Chinese Medicine",
                                  phone: "+34 666 543 210",
                                  address: "Carrer de Mallorca, 08036, Barcelona",
                                  email: "javier.torres@example.com"
                                }
                      )
        server.create("doctor", {
                                  id: 6,
                                  name: "Elena García",
                                  price: 70,
                                  description: "Ayurveda is Elena García's passion. She offers personalized consultations and treatments based on Ayurvedic principles to help her patients achieve balance and harmony in body, mind, and spirit.",
                                  imageUrl: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1586&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                                  speciality: "Ayurveda",
                                  phone: "+34 644 321 789",
                                  address: "Carrer de Balmes, 08007, Barcelona",
                                  email: "elena.garcia@example.com"
                                }
                      )
        server.create("doctor", {
                                  id: 7,
                                  name: "Diego Martínez",
                                  price: 65,
                                  description: "Diego Martínez specializes in osteopathy, focusing on manual techniques to alleviate pain, improve mobility, and promote overall health and well-being.",
                                  imageUrl: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                                  speciality: "Osteopathy",
                                  phone: "+34 600 987 654",
                                  address: "Rambla de Catalunya, 08008, Barcelona",
                                  email: "diego.martinez@example.com"
                                }
                      )
        server.create("doctor", {
                                  id: 8,
                                  name: "Lucia Ramírez",
                                  price: 60,
                                  description: "Lucia Ramírez is a practitioner of reflexology, using pressure points in the feet and hands to stimulate the body's natural healing processes and promote relaxation and well-being.",
                                  imageUrl: "https://api.unrealperson.com/image?name=image.71553.3654189.jpg&type=tpdne",
                                  speciality: "Reflexology",
                                  phone: "+34 633 876 543",
                                  address: "Carrer de Provença, 08029, Barcelona",
                                  email: "lucia.ramirez@example.com"
                                }
                      )
        server.create("doctor", {
                                  id: 9,
                                  name: "Marcos Sánchez",
                                  price: 70,
                                  description: "Hypnotherapy is Marcos Sánchez's area of expertise. Using guided relaxation techniques, he helps his patients tap into their subconscious minds to overcome challenges and achieve personal growth.",
                                  imageUrl: "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=1599&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                                  speciality: "Hypnotherapy",
                                  phone: "+34 644 543 210",
                                  address: "Carrer de Casanova, 08011, Barcelona",
                                  email: "marcos.sanchez@example.com"
                                }
                      )
        server.create("doctor", {
                                  id: 10,
                                  name: "Carla Fernández",
                                  price: 65,
                                  description: "Aromatherapy is Carla Fernández's specialty. She uses essential oils extracted from plants to promote physical and psychological well-being, offering personalized blends tailored to her patients' needs.",
                                  imageUrl: "https://images.unsplash.com/photo-1491349174775-aaafddd81942?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                                  speciality: "Aromatherapy",
                                  phone: "+34 611 987 654",
                                  address: "Carrer de Muntaner, 08036, Barcelona",
                                  email: "carla.fernandez@example.com"
                                }
                      )
        server.create("doctor", {
                                  id: 11,
                                  name: "Marina López",
                                  price: 55,
                                  description: "Marina López specializes in traditional herbal medicine, drawing on centuries of knowledge to provide effective and natural remedies for her patients.",
                                  imageUrl: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                                  speciality: "Herbal Medicine",
                                  phone: "+34 600 123 456",
                                  address: "Carrer de Mallorca, 08036, Barcelona",
                                  email: "marina.lopez@example.com"
                                }
                      )
        server.create("doctor", {
                                  id: 12,
                                  name: "Hugo García",
                                  price: 60,
                                  description: "Hugo García specializes in traditional Chinese medicine, offering acupuncture, herbal remedies, and dietary advice to promote holistic health and well-being.",
                                  imageUrl: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                                  speciality: "Traditional Chinese Medicine",
                                  phone: "+34 666 234 567",
                                  address: "Carrer de Provença, 08029, Barcelona",
                                  email: "hugo.garcia@example.com"
                                }
                      )
        server.create("doctor", {
                                  id: 13,
                                  name: "Clara Martínez",
                                  price: 70,
                                  description: "Clara Martínez is an expert in Ayurvedic medicine, offering personalized treatments to restore balance and harmony to the body and mind.",
                                  imageUrl: "https://plus.unsplash.com/premium_photo-1671823917954-dc943c1bd9df?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                                  speciality: "Ayurvedic Medicine",
                                  phone: "+34 611 345 678",
                                  address: "Carrer de Balmes, 08007, Barcelona",
                                  email: "clara.martinez@example.com"
                                }
                      )
        server.create("doctor", {
                                  id: 14,
                                  name: "Pedro Ramírez",
                                  price: 65,
                                  description: "Pedro Ramírez specializes in osteopathy, offering manual therapy techniques to relieve pain and improve mobility for his patients.",
                                  imageUrl: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                                  speciality: "Osteopathy",
                                  phone: "+34 633 876 543",
                                  address: "Carrer de Casanova, 08011, Barcelona",
                                  email: "pedro.ramirez@example.com"
                                }
                      )
        server.create("doctor", {
                                  id: 15,
                                  name: "Ana García",
                                  price: 60,
                                  description: "Ana García specializes in reflexology, using pressure points in the feet to promote relaxation and well-being throughout the body.",
                                  imageUrl: "https://plus.unsplash.com/premium_photo-1671718111036-0a4b73625a4a?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                                  speciality: "Reflexology",
                                  phone: "+34 644 543 210",
                                  address: "Carrer d'En Robador, 81, 08001, Barcelona",
                                  email: "ana.garcia@example.com"
                                }
                      )
        server.create("doctor", {
                                  id: 16,
                                  name: "Raul Martínez",
                                  price: 70,
                                  description: "Raul Martínez is a specialist in traditional Chinese medicine, offering acupuncture and herbal remedies to promote healing and well-being.",
                                  imageUrl: "https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                                  speciality: "Traditional Chinese Medicine",
                                  phone: "+34 622 345 678",
                                  address: "Carrer de Mallorca, 08036, Barcelona",
                                  email: "raul.martinez@example.com"
                                }
                      )
        server.create("doctor", {
                                  id: 17,
                                  name: "Luisa Sánchez",
                                  price: 65,
                                  description: "Luisa Sánchez specializes in homeopathy, offering natural remedies to stimulate the body's healing processes and promote overall health.",
                                  imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1522&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                                  speciality: "Homeopathy",
                                  phone: "+34 600 876 543",
                                  address: "Plaça de Catalunya, 08002, Barcelona",
                                  email: "luisa.sanchez@example.com"
                                }
                      )
        server.create("doctor", {
                                  id: 18,
                                  name: "Eva Pérez",
                                  price: 60,
                                  description: "Eva Pérez is a naturopathic doctor, offering holistic treatments to promote wellness and vitality through natural healing methods.",
                                  imageUrl: "https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?q=80&w=1453&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                                  speciality: "Naturopathy",
                                  phone: "+34 633 234 567",
                                  address: "Carrer de Muntaner, 08036, Barcelona",
                                  email: "eva.perez@example.com"
                                }
                      )
        server.create("doctor", {
                                  id: 19,
                                  name: "Pablo Fernández",
                                  price: 70,
                                  description: "Pablo Fernández is a specialist in Ayurvedic medicine, offering personalized treatments to balance the body, mind, and spirit.",
                                  imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                                  speciality: "Ayurvedic Medicine",
                                  phone: "+34 611 987 654",
                                  address: "Carrer de Provença, 08029, Barcelona",
                                  email: "pablo.fernandez@example.com"
                                }
                      )
        server.create("doctor", {
                                  id: 20,
                                  name: "Marina Serrano",
                                  price: 65,
                                  description: "Marina Serrano is a hypnotherapist, offering guided relaxation techniques to help patients overcome challenges and achieve personal growth.",
                                  imageUrl: "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                                  speciality: "Hypnotherapy",
                                  phone: "+34 600 543 210",
                                  address: "Carrer de Balmes, 08007, Barcelona",
                                  email: "marina.serrano@example.com"
                                }
                      )
        server.create("doctor", {
                                  id: 21,
                                  name: "David Martínez",
                                  price: 60,
                                  description: "David Martínez specializes in traditional Chinese medicine, offering acupuncture and herbal remedies to promote health and well-being.",
                                  imageUrl: "https://plus.unsplash.com/premium_photo-1675130119373-61ada6685d63?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                                  speciality: "Traditional Chinese Medicine",
                                  phone: "+34 666 876 543",
                                  address: "Avinguda Diagonal, 08019, Barcelona",
                                  email: "david.martinez@example.com"
                                }
                      )
        server.create("doctor", {
                                  id: 22,
                                  name: "Lorena Gómez",
                                  price: 70,
                                  description: "Lorena Gómez is an expert in Ayurvedic medicine, offering personalized treatments to restore balance and harmony to the body and mind.",
                                  imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                                  speciality: "Ayurvedic Medicine",
                                  phone: "+34 633 321 789",
                                  address: "Passeig de Gràcia, 08007, Barcelona",
                                  email: "lorena.gomez@example.com"
                                }
                      )
        server.create("doctor", {
                                  id: 23,
                                  name: "Alberto López",
                                  price: 65,
                                  description: "Alberto López specializes in osteopathy, offering manual therapy techniques to relieve pain and promote healing.",
                                  imageUrl: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=1589&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                                  speciality: "Osteopathy",
                                  phone: "+34 644 678 901",
                                  address: "Rambla de Catalunya, 08008, Barcelona",
                                  email: "alberto.lopez@example.com"
                                }
                      )
        server.create("doctor", {
                                  id: 24,
                                  name: "Natalia Ruiz",
                                  price: 60,
                                  description: "Natalia Ruiz specializes in reflexology, offering foot and hand massages to promote relaxation and well-being.",
                                  imageUrl: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                                  speciality: "Reflexology",
                                  phone: "+34 600 234 567",
                                  address: "Carrer de Casanova, 08011, Barcelona",
                                  email: "natalia.ruiz@example.com"
                                }
                      )
        server.create("doctor", {
                                  id: 25,
                                  name: "Laura Sánchez",
                                  price: 70,
                                  description: "Laura Sánchez is an expert in Ayurvedic medicine, offering personalized treatments to restore balance and harmony to the body and mind.",
                                  imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                                  speciality: "Ayurvedic Medicine",
                                  phone: "+34 633 876 543",
                                  address: "Plaça de Catalunya, 08002, Barcelona",
                                  email: "laura.sanchez@example.com"
                                }
                      )
        server.create("doctor", {
                                  id: 26,
                                  name: "Carlos Pérez",
                                  price: 65,
                                  description: "Carlos Pérez specializes in homeopathy, offering natural remedies to stimulate the body's healing processes and promote overall health.",
                                  imageUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                                  speciality: "Homeopathy",
                                  phone: "+34 644 789 012",
                                  address: "Carrer d'En Robador, 81, 08001, Barcelona",
                                  email: "carlos.perez@example.com"
                                }
                      )
        server.create("doctor", {
                                  id: 27,
                                  name: "María Martínez",
                                  price: 60,
                                  description: "María Martínez specializes in naturopathy, offering holistic treatments to promote wellness and vitality through natural healing methods.",
                                  imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1588&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                                  speciality: "Naturopathy",
                                  phone: "+34 633 567 890",
                                  address: "Carrer de Provença, 08029, Barcelona",
                                  email: "maria.martinez@example.com"
                                }
                      )
        server.create("doctor", {
                                  id: 28,
                                  name: "Juan Gómez",
                                  price: 70,
                                  description: "Juan Gómez is an expert in Ayurvedic medicine, offering personalized treatments to restore balance and harmony to the body and mind.",
                                  imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                                  speciality: "Ayurvedic Medicine",
                                  phone: "+34 600 901 234",
                                  address: "Carrer de Casanova, 08011, Barcelona",
                                  email: "juan.gomez@example.com"
                                }
                      )
        server.create("doctor", {
                                  id: 29,
                                  name: "Juan Ruiz",
                                  price: 65,
                                  description: "Juan Ruiz specializes in reflexology, offering foot and hand massages to promote relaxation and well-being.",
                                  imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                                  speciality: "Reflexology",
                                  phone: "+34 611 345 678",
                                  address: "Carrer de Muntaner, 08036, Barcelona",
                                  email: "sara.ruiz@example.com"
                                }
                      )
        server.create("doctor", {
                                  id: 30,
                                  name: "Pablo Serrano",
                                  price: 70,
                                  description: "Pablo Serrano is a hypnotherapist, offering guided relaxation techniques to help patients overcome challenges and achieve personal growth.",
                                  imageUrl: "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?q=80&w=1506&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                                  speciality: "Hypnotherapy",
                                  phone: "+34 644 789 012",
                                  address: "Rambla de Catalunya, 08008, Barcelona",
                                  email: "pablo.serrano@example.com"
                                }
                      )

        server.create("user", { id: "123", email: "i@g.com", password: "i1807", name: "Itab" })
    },

    routes() {
        this.namespace = "api"
        this.logging = false
        // this.timing = 2000  // => mock a 2 second delay in server response
        // this.passthrough("https://firestore.googleapis.com/**")

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
