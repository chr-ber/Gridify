import{d as s}from"./app.a02963e2.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=s(`<h1 id="gridifyquery" tabindex="-1"><a class="header-anchor" href="#gridifyquery" aria-hidden="true">#</a> GridifyQuery</h1><p><code>GridifyQuery</code> is a simple class for configuring Filtering, Ordering and Paging.</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> gq <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">GridifyQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    Filter <span class="token operator">=</span> <span class="token string">&quot;FirstName=John&quot;</span><span class="token punctuation">,</span>
    Page <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>
    PageSize <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">,</span>
    OrderBy <span class="token operator">=</span> <span class="token string">&quot;Age&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// Apply Filter, Sort and Paging</span>
<span class="token class-name">Paging<span class="token punctuation">&lt;</span>Person<span class="token punctuation">&gt;</span></span> result <span class="token operator">=</span> personsRepo<span class="token punctuation">.</span><span class="token function">Gridify</span><span class="token punctuation">(</span>gq<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="isvalid" tabindex="-1"><a class="header-anchor" href="#isvalid" aria-hidden="true">#</a> IsValid</h2><p>This extension method, checks if the <code>GridifyQuery</code> (<code>Filter</code>, <code>OrderBy</code>) is valid to use with a custom mapper or the auto generated mapper and returns true or false.</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> gq <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">GridifyQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> Filter <span class="token operator">=</span> <span class="token string">&quot;name=John&quot;</span> <span class="token punctuation">,</span> OrderBy <span class="token operator">=</span> <span class="token string">&quot;Age&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// true</span>
<span class="token class-name"><span class="token keyword">bool</span></span> isValid <span class="token operator">=</span> gq<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">IsValid</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Person<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> gq <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">GridifyQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> Filter <span class="token operator">=</span> <span class="token string">&quot;NonExist=John&quot;</span> <span class="token punctuation">,</span> OrderBy <span class="token operator">=</span> <span class="token string">&quot;Age&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// false (NonExist is not a property of Person)</span>
<span class="token class-name"><span class="token keyword">bool</span></span> isValid <span class="token operator">=</span> gq<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">IsValid</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Person<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> gq <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">GridifyQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> Filter <span class="token operator">=</span> <span class="token string">&quot;@name=!&quot;</span> <span class="token punctuation">,</span> OrderBy <span class="token operator">=</span> <span class="token string">&quot;Age&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// false (this is not a valid filter)</span>
<span class="token class-name"><span class="token keyword">bool</span></span> isValid <span class="token operator">=</span> gq<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">IsValid</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Person<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Optionally you can pass a custom mapper to check if the <code>GridifyQuery</code> is valid for that mapper.</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> mapper <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">GridifyMapper<span class="token punctuation">&lt;</span>Person<span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">AddMap</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> q <span class="token operator">=&gt;</span> q<span class="token punctuation">.</span>Name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name"><span class="token keyword">var</span></span> gq <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">GridifyQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> Filter <span class="token operator">=</span> <span class="token string">&quot;name=John&quot;</span> <span class="token punctuation">,</span> OrderBy <span class="token operator">=</span> <span class="token string">&quot;Age&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// false (Age is not mapped)</span>
<span class="token class-name"><span class="token keyword">bool</span></span> isValid <span class="token operator">=</span> gq<span class="token punctuation">.</span><span class="token function">IsValid</span><span class="token punctuation">(</span>mapper<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="getfilteringexpression" tabindex="-1"><a class="header-anchor" href="#getfilteringexpression" aria-hidden="true">#</a> GetFilteringExpression</h2><p>This extension method, creates a lambda expression using the <code>GridifyQuery.Filter</code> property that you can use it in the LINQ <code>Where</code> method to filter the data.</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> gq <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">GridifyQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> Filter <span class="token operator">=</span> <span class="token string">&quot;name=John&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token class-name">Expression<span class="token punctuation">&lt;</span>Func<span class="token punctuation">&lt;</span>T<span class="token punctuation">,</span> <span class="token keyword">bool</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> expression <span class="token operator">=</span> gq<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetFilteringExpression</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Person<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name"><span class="token keyword">var</span></span> result <span class="token operator">=</span> personsRepo<span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span>expression<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">\xA0</div><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,13);function e(t,o){return p}var r=n(a,[["render",e]]);export{r as default};
