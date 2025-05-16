import { Injectable } from "@angular/core";
import { LoadingController, ToastController, AlertController, IonicSafeString } from "@ionic/angular";

@Injectable({
    providedIn: 'root'
})
export class InteractionService {
    private loading: HTMLIonLoadingElement

    constructor(private loadingCtrl: LoadingController, private toastCtrl: ToastController, private alertCtrl: AlertController) {}

    //Mostrar Mensaje de cargando cuando se esta esperando la respuesta del servidor.
    async showLoading(message: string = "Cargando...") {
        this.loading = await this.loadingCtrl.create({
            message,
            backdropDismiss: true,
        });
        await this.loading.present();
    }

    //cierra el mensaje de alerta cuando ya se trajeron los datos.
    async dismissLoading() {
        if(this.loading){
            await this.loading.dismiss()
        }
        this.loading = null;
    }
    
    //Mostrar un modal con un mensaje de exito o error o lo que se queria mostrar.
    async showToast(message: string, duration: number = 2000, position: "bottom" | "top" | "middle" = "bottom"){
        const toast = await this.toastCtrl.create({
            message,
            duration,
            position,
            color: "dark",
        });
        await toast.present();
    }


    //En esta función se van a mostrar uno,( cuando queremos informar al usuario de algo ) o dos botones ( cuando le hacemos una pregunta y queremos que el usuario responda).
    async presentAlert(header:string, message: string, textCANCEL: string = null, textOK: string = 'OK'): Promise<boolean> {
        return new Promise(async(resolve) => {
            let buttons = [];
            if(textCANCEL){
                buttons.push({
                    text: textCANCEL,
                    role: 'cancel',
                    handler: () => {
                        resolve(false);
                    }
                });
            }
            buttons.push({
                text: textOK,
                handler: async () => {
                    resolve(true);
                }
            })
            const alert = await this.alertCtrl.create({
                header,
                message: (new IonicSafeString(message)).value,
                buttons,
                backdropDismiss: true,
            });
            await alert.present();
        })
    }

}