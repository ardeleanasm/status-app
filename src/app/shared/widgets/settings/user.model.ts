import {Either,Left,Right} from 'purify-ts/Either';

export class User {
    private _username: string;
    private _email:string;
    private _password:string;
    private _passwordAgain:string;
    private _picture:string;
    private _emptyFieldError:boolean;
    constructor(){
        this._emptyFieldError=false;
    }

    setUsername(username:string):this{
        if (username==="" || username==undefined){
            this._emptyFieldError=true;
        }
        this._username=username;
        return this;
    }

    setEmail(email:string):this{
        if (email==="" || email==undefined){
            this._emptyFieldError=true;
        }
        this._email=email;
        return this;
    }

    setPassword(password:string,passwordAgain:string):this{
        if (
            (password==="" || password==undefined)
            || (passwordAgain==="" || password==undefined)
            ) {
            this._emptyFieldError=true;
        }
        this._password=password;
        this._passwordAgain=passwordAgain;
        return this;
    }
    setPicture(picture:string):this{
        if (picture==="" || picture==undefined){
            this._emptyFieldError=true;
        }
        this._picture=picture;
        return this;
    }

    get username():string{
        return this._username;
    }

    get password():string{
        return this._password;
    }

    get email():string {
        return this._email;
    }

    get picture():string {
        return this._picture;
    }

    isValid():Either<string,boolean>{
        if (this._emptyFieldError) {
            return Left("Empty fields!");
        }
        if (!this.arePasswordsValid()){
            return Left("Passwords don't match!");
        }
        if (!this.isEmailValid()){
            return Left("Email is not valid!");
        }
        return Right(true);
    }

    isEmailValid():boolean {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(this._email).toLowerCase());
    }

    arePasswordsValid():boolean {
        if (this._password != this._passwordAgain){
            return false;
        }
        return true;
    }
    
}