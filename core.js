define(['./other'], function(other) {
  other.a;
  other.b();
  return {
    hello: 'world',
    foo: function(),
    other: other,
  };
});
