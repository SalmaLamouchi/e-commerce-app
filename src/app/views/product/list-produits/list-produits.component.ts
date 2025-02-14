// src/app/list-produits/list-produits.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PRODUCTS } from '../list-produits/products.data';
// Modèle de produit
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

@Component({
  selector: 'app-list-produits',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-produits.component.html',
  styleUrl: './list-produits.component.css'
})
export class ListProduitsComponent implements OnInit {
  // Utilisez les données statiques
  products: Product[] = PRODUCTS;

  constructor() { }

  ngOnInit(): void {
    // Pas besoin de charger les produits depuis un service, ils sont déjà initialisés statiquement
  }
}