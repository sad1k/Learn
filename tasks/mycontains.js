Object.prototype.myContains = function (target) {
if (typeof this === "object" && this !== null) {
    for (let node of this.children) {
    console.log(node);
    if (node == target) {
        return true;
    }
    return node.myContains(target);
    }
}
return false;
};
module.exports = Object.prototype.myContains
