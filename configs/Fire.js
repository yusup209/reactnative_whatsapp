import firebase from 'firebase'

class Fire {
    constructor() {
        this.init()
        this.observeAuth()
    }

    init = () => {
        if (!firebase.apps.length) {
            firebase.initializeApp({
                apiKey: "AIzaSyB2M5Y-Vln2qrymic8PoMGSviX19SlY3Jc",
                authDomain: "react-whatsapp-3b43b.firebaseapp.com",
                databaseURL: "https://react-whatsapp-3b43b.firebaseio.com",
                projectId: "react-whatsapp-3b43b",
                storageBucket: "react-whatsapp-3b43b.appspot.com",
                messagingSenderId: "164797180402",
                appId: "1:164797180402:web:53d18a10e9617d5c82636b"
            })
        }
    }

    observeAuth = () => {
        firebase.auth().onAuthStateChanged(this.onAuthStateChanged)
    }

    onAuthStateChanged = user => {
        if (!user){
            try{
                firebase.auth().signInAnonymously()
            } catch ({ message }){
                alert(message)
            }
        }
    }

    get uid(){
        return (firebase.auth().currentUser || {}).uid
    }

    get ref(){
        return firebase.database().ref('messages')
    }

    parse = snapshot => {
        const { itmstamp: numberStamp, text, user } = snapshot.val()
        const {key : _id} = snapshot
        const timestamp = new Date(numberStamp)
        const message = {
            _id,
            timestamp,
            text,
            user
        }

        return message
    }

    on = callback => this.ref.limitToLast(20).on('child_added', snapshot => callback(this.parse(snapshot)))

    get timestamp(){
        return firebase.database.ServerValue.TIMESTAMP
    }

    send = messages => {
        for (let i = 0; i < messages.length; i++){
            const {text, user} = messages[i]
            const message = {
                text,
                user,
                timestamp: this.timestamp
            }
            this.append(message)
        }
    }

    append = message => this.ref.push(message)

    off(){
        this.ref.off()
    }

}

Fire.shared = new Fire()
export default Fire