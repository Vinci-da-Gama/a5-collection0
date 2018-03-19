import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/observable';
import '../app/operators';

@Injectable()
export class FbAuthService {

	private anonymousUserState: Observable<firebase.User>;
	public fbStoreItems: Observable<any[]>;

	constructor(
		private httpCli: HttpClient,
		private afAuth: AngularFireAuth,
		private afStore: AngularFirestore,
		private afDb: AngularFireDatabase
	) { }

	public AnonymousAuth() {
		this.afAuth.auth.signInAnonymously()
		return this.afAuth.authState;
	}

	public checkFbStore() {
		return this.afStore.collection('items').valueChanges();
	}

	public registerUser(email: string, password: string) {
		return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
	}

	public signinUser(email: string, password: string) {
		return this.afAuth.auth.signInWithEmailAndPassword(email, password);
	}

	public signOut() {
		this.afAuth.auth.signOut();
	}

}
