import { IRequest, openApi } from "../gen/function/open-api";
import { ISignUpRequest } from "../gen/interface/components/i-sign-up-request";
import { MeBaseService } from "../gen/service/me-base-service";
import { GoogleService } from "./GoogleService";

export class MeService extends MeBaseService {
    async createAccount(accountData: ISignUpRequest) {
        const signUpResponse = await this.signUp(accountData)
        if (!signUpResponse) return
        
        const googleService = new GoogleService()
        const { idToken } = await googleService.getGoogleJWT({ email: accountData.email, password: accountData.password, returnSecureToken: true })
        if (!idToken) return
        
        openApi.requestInterceptor = async (request: IRequest) => {
            if (request.header) {
                request.header = {
                    Authorization: `Bearer ${idToken}`
                }
            }

            return request
        }

        return idToken
    }
}