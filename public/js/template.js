/** 
 * componentsTemplateForm
 * Bootstrap v:4.6
 * https://v4.bootcss.com/docs/components/
*/

const InputGroupEmail = `<div class="form-group">
<label for="exampleInputEmail1">Email address</label>
<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
<small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
</div>`

const InputGroupPassWord = `<div class="form-group">
<label for="exampleInputPassword1">Password</label>
<input type="password" class="form-control" id="exampleInputPassword1">
</div>`

const InputGroupCheckBox = `
<div class="form-group">
  <div class="form-check">
    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
    <label class="form-check-label" for="defaultCheck1">
      Default checkbox
    </label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" disabled>
    <label class="form-check-label" for="defaultCheck2">
      Disabled checkbox
    </label>
  </div>
</div>`

const InputGroupRadio = `
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
  <label class="form-check-label" for="exampleRadios1">
    Default radio
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
  <label class="form-check-label" for="exampleRadios2">
    Second default radio
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" disabled>
  <label class="form-check-label" for="exampleRadios3">
    Disabled radio
  </label>
</div>`

const SelectGroupValue = `
<div class="form-group">
  <label for="inputState">State</label>
  <select id="inputState" class="form-control">
    <option selected>Choose...</option>
    <option>...</option>
  </select>
</div>`

const ButtonGroupSubmit = `
<div class="form-group">
  <button class="btn btn-primary" type="submit">Button</button>
</div>
`
const TextareaGroupValue =`
<div class="form-group">
  <label for="exampleFormControlTextarea1">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>`

const Swiper = `
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-target="#carouselExampleIndicators"  data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-target="#carouselExampleIndicators"  data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </button>
</div>`

const Card = `
<div class="card" style="width: 18rem;">
<img src="https://cdn.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.49/dist/img/typescript.png" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">
  <a href="https://typescript.bootcss.com/" title="TypeScript 中文手册" target="_blank" onclick="_hmt.push(['_trackEvent', 'tile', 'click', 'typescript'])">TypeScript <br>
  <small>中文手册</small></a>
  </h5>
  <p class="card-text">TypeScript 是由微软开源的编程语言。它是 JavaScript 的一个超集，而且本质上向这个语言添加了可选的静态类型和基于类的面向对象编程。</p>
</div>
</div>`

const InputGroupRange = `
<div class="form-group">
<label for="formControlRange">Example Range input</label>
<input type="range" class="form-control-range" id="formControlRange">
</div>`

const QRcode = `
<div class="qr-code text-center">
  <img src="data:image/png;base64,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" class="rounded" />
</div>
`
const Accordion =`
<div class="accordion" id="accordionExample">
  <div class="card">
    <div class="card-header" id="headingOne">
      <h2 class="mb-0">
        <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Collapsible Group Item #1
        </button>
      </h2>
    </div>

    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div class="card-body">
        Some placeholder content for the first accordion panel. This panel is shown by default, thanks to the <code>.show</code> class.
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingTwo">
      <h2 class="mb-0">
        <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Collapsible Group Item #2
        </button>
      </h2>
    </div>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div class="card-body">
        Some placeholder content for the second accordion panel. This panel is hidden by default.
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingThree">
      <h2 class="mb-0">
        <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Collapsible Group Item #3
        </button>
      </h2>
    </div>
    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
      <div class="card-body">
        And lastly, the placeholder content for the third and final accordion panel. This panel is hidden by default.
      </div>
    </div>
  </div>
</div>
`
const Jumbotron = `
<div class="jumbotron">
  <h1 class="display-4">Hello, world!</h1>
  <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr class="my-4">
  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
</div>
`
const News = `
<div class="row">
  <div class="col-4">
    <img src="https://cdn.jsdelivr.net/npm/@bootcss/v3.bootcss.com@1.0.13/assets/img/components.png" class="img-fluid" alt="完美功能">
  </div>
  <div class="col-8">
    <h5 class="card-title">Building</h5>
    <p class="card-text">Bootstrap 提供了全面、美观的文档，你能在这里找到关于普通 HTML 元素、HTML 和 CSS 组件以及 jQuery 插件方面的所有详细文档。</p>
  </div>
</div>
`
const HendMenu = `
<nav class="navbar navbar-light bg-light">
  <a class="navbar-brand" href="#">
    <img src="https://v4.bootcss.com/docs/4.6/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt="">
    Building
  </a>
</nav>
`
const Image = `
<p class="image"><img src="..." class="img-fluid" alt="..."></p>
` 