import { FlinkClientError } from "./FlinkClientError";
import { openApi } from "./gen/function/open-api";
import { GoogleService } from "./service/GoogleService";
import { MeService } from "./service/MeService";
import { VerifyService } from "./service/VerifyService";

export class FlinkClient {
    private meService?: MeService

    private verifyService?: VerifyService

    private googleService?: GoogleService

    constructor(){
        openApi.endpointUrl = 'https://consumer-api.goflink.com/v1'
        openApi.responseInterceptor = async (req, response: Response) => {
            if(response && response.status.toString().startsWith('4')) {
                if(response.body) throw new FlinkClientError(JSON.parse(await response.text()))
                throw response.status
            }
            return response.text()
        }
    }

    getMeService() {
        if(!this.meService) this.meService = new MeService()
        return this.meService
    }

    getVerifyService() {
        if(!this.verifyService) this.verifyService = new VerifyService()
        return this.verifyService
    }

    getGoogleService() {
        if(!this.googleService) this.googleService = new GoogleService()
        return this.googleService
    }
}