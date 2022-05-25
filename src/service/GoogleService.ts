import { http } from "../gen/function/http";
import { openApi } from "../gen/function/open-api";
import { IGetGoogleJWTRequest } from "../gen/interface/components/i-get-google-j-w-t-request";
import { RelyingpartyBaseService } from "../gen/service/relyingparty-base-service";

export class GoogleService extends RelyingpartyBaseService {
    getGoogleJWT = async (body: IGetGoogleJWTRequest) => {
        const response = await http(
        {
            method: 'POST',
            url: `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBV8_gj93sKn4u_VNjCNPA3_3Rb-rUVy9c`,
            header: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        },
        openApi.requestInterceptor,
        openApi.errorHandler,
        openApi.responseInterceptor
        );

        return JSON.parse(response);
    }
}