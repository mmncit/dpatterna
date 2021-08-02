import { DataFetcher } from "./DataFetcher";
import { Observer } from "./Observer";


export interface Subject{
    registerObserver(o: Observer): void;
    removeObserver(o: Observer): void;
    notifyObserver(): void;
}