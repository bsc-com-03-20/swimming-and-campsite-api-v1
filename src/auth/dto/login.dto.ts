export class LoginDto {
    [x: string]: any
    signIn(payload: { userId: any }) {
      throw new Error('Method not implemented.')
    }
    username: string 
    password: string
    email: string
    firstname: string
}