# How to Link Pages in Admin Reports

This guide focuses strictly on how to link a new page to the existing app and vice versa.

## 1. Linking TO Your New Page
To make your page accessible (e.g., from the sidebar or a dashboard button), use a simple `onclick` event.

### From Sidebar (`src/html/includes/sidebar.html` or inline sidebar)
Find the button you want to use and add the `onclick` attribute:

```html
<!-- Example: Linking to 'my-new-page.html' -->
<button class="zmbtn" onclick="location.href='my-new-page.html'">
    <i class="zmri-star zmbtn__icon"></i>
    <span class="zmbtn__text">My New Page</span>
</button>
```

### From Dashboard Cards
If adding a card to a dashboard:

```html
<div class="card" onclick="location.href='my-new-page.html'">
    <!-- Card content -->
</div>
```

---

## 2. Linking BACK (Vice Versa)
Your new page should allow users to navigate back or to other main sections.

### Back Button
Add a back button in your page header:

```html
<button class="zmbtn" onclick="history.back()">
    <i class="zmri-arrow-left"></i> Back
</button>
```
*Or link to a specific parent page:*
```html
<button class="zmbtn" onclick="location.href='dashboard.html'">
    <i class="zmri-dashboard"></i> Back to Dashboard
</button>
```

### Active State in Sidebar
To show the user where they are, find the sidebar link for your page and add the `active` class:

```html
<!-- In my-new-page.html sidebar section -->
<li class="active"> <!-- Add 'active' class here -->
    <button class="zmbtn" onclick="location.href='my-new-page.html'">...</button>
</li>
```
