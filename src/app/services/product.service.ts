// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Product } from '../models/product'; // Assurez-vous que le chemin est correct

// @Injectable({
//   providedIn: 'root'
// })
// export class ProductService {
//   private apiUrl = 'http://localhost:3000/api/products'; // Remplacez par l'URL de votre API

//   constructor(private http: HttpClient) { }

//   // Fonction pour récupérer tous les produits
//   getAllProducts(): Observable<Product[]> {
//     return this.http.get<Product[]>(this.apiUrl);
//   }
// }