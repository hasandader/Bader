const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

class Fire {

    constructor() {
        this.init();
    }

    init = () => {

        if (!firebase.apps.length) {
            firebase.initializeApp({
                apiKey: "",
                authDomain: "",
                projectId: "",
            });
        } else {
            firebase.app();
        }
    };

    setUser(user, onLoad, operationStatus) {
        console.log('setUser Called!')

        this.db.collection("").add(user)
            .then((docRef) => {
                console.log("Document written with ID: ", docRef.id);
                onLoad();
                operationStatus('success');
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
                onLoad();
                operationStatus('fail');
            });

    }

    getUsers() {
        console.log('getUsers Called!')

        this.db.collection("").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // JSON.stringify(doc.data())
                arr = doc.data()
                console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
            });
        });
    }

    get db() {
        return firebase.firestore();
    }

}

export default new Fire();
