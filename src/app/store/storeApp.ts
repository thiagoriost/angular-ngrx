import { patchState, signalStore, withMethods, withState } from "@ngrx/signals";


export interface intf_productos{
  id: number,
  item: string
}


export interface int_store{
  products: intf_productos[];
  texto: string;
  movil:number;
}


const initialState: int_store = {
  movil:3106777777,
  products:[
    {
      id: 0,
      item: "test1"
    }],
  texto: "probando probando"
}

export const StoreApp = signalStore(
  {providedIn:'root'},
  withState(initialState),
  withMethods(({products, ...store})=>({

    addToCar(producto: intf_productos){
      console.log({producto});
      const updatedProducts = [...products(), producto];
      console.log({updatedProducts});

      patchState(store, {products: updatedProducts})
    },
    removerItemDelCarro(id:number){
      const updatedProducts = products().filter(p => p.id !== id)
      patchState(store, {products: updatedProducts})
    },
    clearCarro(){
      patchState(store, {products: []})
    }


  }))
)
