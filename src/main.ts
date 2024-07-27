import { ApiExpress } from "./api/express/api.express";
import { ProductController } from "./api/express/product.controllers";

function main () {
    const api = ApiExpress.build();

    const controller = ProductController.build();

    api.addGetRoute("/products", controller.list);
    api.addGetRoute("/products/:id/buy", controller.buy);
    api.addGetRoute("/products/:id/sell", controller.sell);
    api.addGetRoute("/products/create", controller.create);

    api.start(8000);
}

main();