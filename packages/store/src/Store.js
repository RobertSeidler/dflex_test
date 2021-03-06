import Generator from "@dflex/dom-gen/src";
import AbstractStore from "./AbstractStore";
import Tracker from "./Tracker";

/**
 * Store class contains all dnd elements and their orders.
 *
 * @extends {Generator}
 *
 */
class Store {
  constructor() {
    this.abstractStore = new AbstractStore();
    this.DOMGen = new Generator();

    this.tracker = new Tracker();
  }

  /**
   * Add elements to registry.
   *
   * @param {Object} elmInstance
   * @param {function} CustomInstance - constructor function.
   * @param {Object} opts - extra options to be stored in the registry.
   * @memberof Store
   */
  register(elmInstance, CustomInstance, opts) {
    const { id, depth } = elmInstance;

    /**
     * Avoid register same elmInstance twice.
     * TODO: Add test to this
     */
    if (this.abstractStore.registry[id]) {
      return;
    }

    const pointer = this.DOMGen.getElmPointer(id, depth);

    const coreInstance = Object.assign(elmInstance, pointer, opts);

    this.abstractStore.register(coreInstance, CustomInstance);
  }

  /**
   * Gets element from registry by Id.
   *
   * @param {string} id
   * @returns {elmInstance} - elmInstance Object.
   * @memberof Store
   */
  getElmById(id) {
    return this.abstractStore.getElmById(id);
  }

  /**
   * TODO: Add this to README documentation
   *
   * Gets element branch lists
   *
   * @param {string} key
   * @returns {string|Array} - elements siblings list.
   * @memberof Store
   */
  getElmBranchByKey(ky) {
    return this.DOMGen.getElmBranch(ky);
  }

  /**
   * Gets element connections instance for a given id.
   *
   * @param {string} elmId
   *
   * @returns {Object}  connectObj
   * @returns {elmInstance} connectObj.element  - Targeted element.
   * @returns {elmInstance} connectObj.parent - Container element.
   * @returns {Object} connectObj.branches - Container element.
   * @returns {Array} branches.siblings - Array contains ids, siblings to element-id.
   * @returns {Array} branches.parents - Array contains ids, parents to element-id.
   *
   * @memberof Store
   */
  getElmTreeById(elmId) {
    const element = this.getElmById(elmId);

    const {
      keys: { sK, pK },
      order: { parent: pi },
    } = element;

    /**
     * getting connected branches
     */
    const siblings = this.getElmBranchByKey(sK);
    const parents = this.getElmBranchByKey(pK);

    /**
     * getting parent instance
     */
    let parent = null;
    if (parents !== undefined) {
      const parentsID = Array.isArray(parents) ? parents[pi] : parents;
      parent = this.getElmById(parentsID);
    }

    return {
      element,
      parent,

      branches: {
        siblings,
        parents,
      },
    };
  }
}

export default Store;
