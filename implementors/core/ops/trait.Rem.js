(function() {var implementors = {};
implementors["lazy_static"] = [];implementors["libc"] = [];implementors["enum_primitive"] = [];implementors["num_bigint"] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Rem.html' title='core::ops::Rem'>Rem</a>&lt;<a class='struct' href='num_bigint/struct.BigUint.html' title='num_bigint::BigUint'>BigUint</a>&gt; for <a class='struct' href='num_bigint/struct.BigUint.html' title='num_bigint::BigUint'>BigUint</a>","impl&lt;'a&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Rem.html' title='core::ops::Rem'>Rem</a>&lt;&amp;'a <a class='struct' href='num_bigint/struct.BigUint.html' title='num_bigint::BigUint'>BigUint</a>&gt; for <a class='struct' href='num_bigint/struct.BigUint.html' title='num_bigint::BigUint'>BigUint</a>","impl&lt;'a&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Rem.html' title='core::ops::Rem'>Rem</a>&lt;<a class='struct' href='num_bigint/struct.BigUint.html' title='num_bigint::BigUint'>BigUint</a>&gt; for &amp;'a <a class='struct' href='num_bigint/struct.BigUint.html' title='num_bigint::BigUint'>BigUint</a>","impl&lt;'a,&nbsp;'b&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Rem.html' title='core::ops::Rem'>Rem</a>&lt;&amp;'b <a class='struct' href='num_bigint/struct.BigUint.html' title='num_bigint::BigUint'>BigUint</a>&gt; for &amp;'a <a class='struct' href='num_bigint/struct.BigUint.html' title='num_bigint::BigUint'>BigUint</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Rem.html' title='core::ops::Rem'>Rem</a>&lt;<a class='struct' href='num_bigint/struct.BigInt.html' title='num_bigint::BigInt'>BigInt</a>&gt; for <a class='struct' href='num_bigint/struct.BigInt.html' title='num_bigint::BigInt'>BigInt</a>","impl&lt;'a&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Rem.html' title='core::ops::Rem'>Rem</a>&lt;&amp;'a <a class='struct' href='num_bigint/struct.BigInt.html' title='num_bigint::BigInt'>BigInt</a>&gt; for <a class='struct' href='num_bigint/struct.BigInt.html' title='num_bigint::BigInt'>BigInt</a>","impl&lt;'a&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Rem.html' title='core::ops::Rem'>Rem</a>&lt;<a class='struct' href='num_bigint/struct.BigInt.html' title='num_bigint::BigInt'>BigInt</a>&gt; for &amp;'a <a class='struct' href='num_bigint/struct.BigInt.html' title='num_bigint::BigInt'>BigInt</a>","impl&lt;'a,&nbsp;'b&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Rem.html' title='core::ops::Rem'>Rem</a>&lt;&amp;'b <a class='struct' href='num_bigint/struct.BigInt.html' title='num_bigint::BigInt'>BigInt</a>&gt; for &amp;'a <a class='struct' href='num_bigint/struct.BigInt.html' title='num_bigint::BigInt'>BigInt</a>",];implementors["num_rational"] = ["impl&lt;T:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='num_integer/trait.Integer.html' title='num_integer::Integer'>Integer</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Rem.html' title='core::ops::Rem'>Rem</a>&lt;<a class='struct' href='num_rational/struct.Ratio.html' title='num_rational::Ratio'>Ratio</a>&lt;T&gt;&gt; for <a class='struct' href='num_rational/struct.Ratio.html' title='num_rational::Ratio'>Ratio</a>&lt;T&gt;","impl&lt;'a,&nbsp;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Rem.html' title='core::ops::Rem'>Rem</a>&lt;<a class='struct' href='num_rational/struct.Ratio.html' title='num_rational::Ratio'>Ratio</a>&lt;T&gt;&gt; for &amp;'a <a class='struct' href='num_rational/struct.Ratio.html' title='num_rational::Ratio'>Ratio</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='num_integer/trait.Integer.html' title='num_integer::Integer'>Integer</a></span>","impl&lt;'a,&nbsp;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Rem.html' title='core::ops::Rem'>Rem</a>&lt;&amp;'a <a class='struct' href='num_rational/struct.Ratio.html' title='num_rational::Ratio'>Ratio</a>&lt;T&gt;&gt; for <a class='struct' href='num_rational/struct.Ratio.html' title='num_rational::Ratio'>Ratio</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='num_integer/trait.Integer.html' title='num_integer::Integer'>Integer</a></span>","impl&lt;'a,&nbsp;'b,&nbsp;T:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='num_integer/trait.Integer.html' title='num_integer::Integer'>Integer</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Rem.html' title='core::ops::Rem'>Rem</a>&lt;&amp;'b <a class='struct' href='num_rational/struct.Ratio.html' title='num_rational::Ratio'>Ratio</a>&lt;T&gt;&gt; for &amp;'a <a class='struct' href='num_rational/struct.Ratio.html' title='num_rational::Ratio'>Ratio</a>&lt;T&gt;",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
