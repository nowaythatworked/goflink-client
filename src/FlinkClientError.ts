export class FlinkClientError extends Error {
    constructor(public error: { [key: string]: any }) {
        super('FlinkClient Error occured')
    }
}