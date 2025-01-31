"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postGetAllAction = void 0;
const typeorm_1 = require("typeorm");
const Post_1 = require("../entity/Post");
/**
 * Loads all posts from the database.
 */
function postGetAllAction(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        // get a post repository to perform operations with post
        const postRepository = (0, typeorm_1.getManager)().getRepository(Post_1.Post);
        // load posts
        const posts = yield postRepository.find();
        // return loaded posts
        response.send(posts);
    });
}
exports.postGetAllAction = postGetAllAction;
//# sourceMappingURL=PostGetAllAction.js.map