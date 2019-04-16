class Tab {
  constructor(tabElement, linkElement) {
    this.tabElement = tabElement;
    this.linkElement = linkElement;

    this.tabsLink = new TabLink(this.linkElement, this.tabElement);

    this.deselect = this.deselect.bind(this);
    this.linkElement.addEventListener('click', this.deselect);
  };

  deselect() {
    if(document.documentElement.clientWidth > 600) {
      this.tabsLink.deselect();
      this.tabsLink.select();
    } else {
      this.tabsLink.accordion();
    }
  }
}


class TabLink {
  constructor(element, tabElement) {
    this.element = element;
    this.tabElement = tabElement;
    this.data = this.element.dataset.tab;

    this.contentElement = tabElement.querySelector(`.tabs-items[data-tab="${this.data}"]`);
    this.itemElement = tabElement.querySelector(`.tabs-item[data-tab="${this.data}"]`);
    this.tabItem = new TabItem(this.contentElement, this.itemElement, this.tabElement);
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

  accordion() {
    const links = this.tabElement.querySelectorAll('.tabs-link');

    links.forEach(function(link) {
      link.classList.remove('tabs-link-selected');
    });

    this.element.classList.add('tabs-link-selected');
    this.tabItem.accordion();
  }
}

class TabItem {
  constructor(contentElement, itemElement, tabElement) {
    // Assign this.element to the passed in element
    this.contentElement = contentElement;
    this.itemElement = itemElement;
    this.tabElement = tabElement;
  }

  deselect() {
    const content = this.tabElement.querySelectorAll('.tabs-item');

    content.forEach(function(item) {
      item.classList.remove('tabs-item-selected');
    });
  }

  select() {
    this.itemElement.classList.add('tabs-item-selected');
  }

  accordion() {
    const content = this.tabElement.querySelectorAll('.tabs-items');
    console.log(this.itemElement);
    content.forEach(function(content) {
      content.classList.remove('tabs-items-selected');

    });
    this.itemElement.classList.remove('tabs-item-selected');
    this.contentElement.classList.add('tabs-items-selected');
    this.itemElement.classList.add('tabs-item-selected');


  }
}

const tabs = document.querySelectorAll('.tabs');

tabs.forEach(function(tabElement) {
  const links = tabElement.querySelectorAll('.tabs-link');

  links.forEach(function(linkElement) {
    new Tab(tabElement, linkElement);
  });
});
