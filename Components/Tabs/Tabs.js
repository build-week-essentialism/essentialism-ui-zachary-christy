class Tab {
  constructor(tabElement, linkElement) {
    this.tabElement = tabElement;
    this.linkElement = linkElement;

    this.tabsLink = new TabLink(this.linkElement, this.tabElement);

    this.deselect = this.deselect.bind(this);
    this.linkElement.addEventListener('click', this.deselect);
  };

  deselect() {
    this.tabsLink.deselect();
    this.tabsLink.select();

  }
}


class TabLink {
  constructor(element, tabElement) {
    this.element = element;
    this.tabElement = tabElement;
    this.data = this.element.dataset.tab;
    this.itemElement = tabElement.querySelector(`.tabs-item[data-tab="${this.data}"]`);
    this.tabItem = new TabItem(this.itemElement, this.tabElement);
  };

  deselect() {
    const links = this.tabElement.querySelectorAll('.tabs-link');

    links.forEach(function(link) {
      link.classList.remove('tabs-link-selected');
    });

    this.tabItem.deselect();
  }

  select() {
    const links = this.tabElement.querySelectorAll('.tabs-link');

    links.forEach(function(link) {
      link.classList.remove('tabs-link-selected');
    });

    this.element.classList.add('tabs-link-selected');
    this.tabItem.select();
  }
}

class TabItem {
  constructor(element, tabElement) {
    // Assign this.element to the passed in element
    this.element = element;
    this.tabElement = tabElement;
  }

  deselect() {
    const content = this.tabElement.querySelectorAll('.tabs-item');

    content.forEach(function(item) {
      item.classList.remove('tabs-item-selected');
    });
  }

  select() {
    this.element.classList.add('tabs-item-selected');
  }
}

const tabs = document.querySelectorAll('.tabs');

tabs.forEach(function(tabElement) {
  const links = tabElement.querySelectorAll('.tabs-link');

  links.forEach(function(linkElement) {
    new Tab(tabElement, linkElement);
  });
});
