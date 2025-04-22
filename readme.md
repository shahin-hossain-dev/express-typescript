# Explore In-depth Express Js

- create a project package `npm init`
- install express js -> `npm install express`
- install typescript as dev dependency `npm install -D typescript`

- add tsconfig.json typescript compiler `tsc --init`
- tsconfig.json এর মধ্যে typescript config set করতে হবে।
- typescript এর file গুলো রাখার জন্য src file
  config এর মধ্যে `"rootDir": "./src"` set করতে হবে।

- typescript থেকে convert হয়ে javaScript file গুলো dist file রাখার জন্য
  config এর মধ্যে `"outDir": "./dist/"` set করে দিতে হবে।
- typescript require syntax support করে না তাই এর জন্য @types/node package install করতে হবে।
  `npm i --save-dev @types/node`
- typescript কে express এর type বুঝানোর জন্য @types/express package install করতে হবে।
  `npm i --save-dev @types/express`

---

## How run Server

- node.js typescript directly বুঝতে পারে না। তাই typescript code কে javascript এ compile করে চালাতে হয়ে। ইতিমধ্যে tsconfig.json এ outdir হিসাবে dist কে set করা হয়েছে।

- এখন tsc -w (-w -> watch mood) watch mood এ থাকলে code change করে save দিলে সাথে সাথে compile হয়ে যাবে। অন্যথায় code change করে বার বার tsc cmd দিয়ে code compile করতে হবে।

- ‍এখন server কে watch mood এর রাখতে nodemon dev dependency হিসাবে use করতে হবে। code change করা হলে সাথে সাথে server re-run করবে।
  `npm install --save-dev nodemon`
