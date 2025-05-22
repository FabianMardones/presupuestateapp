import { ModelsFirestore } from "./firestore.models";
import { ModelsAuth } from "./auth.models";
import { ModelsFunctions } from "./functions.models";


export namespace Models{
    export import FireStore = ModelsFirestore;
    export import Auth = ModelsAuth;
    export import Functions = ModelsFunctions;
}