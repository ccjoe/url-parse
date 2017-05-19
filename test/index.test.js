import test from 'ava'
import url from '../lib'
test('foo', t => {
    t.pass();
});

test('bar', async t => {
    const bar = Promise.resolve('bar');

    t.is(await bar, 'bar');
});


test("测试打印内容", function () {
    var urlarr = [
        'http://www.test.com:8080/a/b/c?test=1&kk=2#hash/p1/p2/p3?htest=1&hh=2',
        'http://www.test.com/a/b/c?test=1&kk=2#hash/p1/p2/p3?htest=1&hh=2',
        'http://localhost:9000/a/b/c?abc/bcd/cde&test=1&kk=2#hash/p1/p2/p3?htest=1&hh=2',
        'http://www.test.com/a/b/c/?test=1&kk=2#hash/p1/p2/p3',
        'http://www.test.com/a/b/c?test=1&kk=2#hash?htest=1&hh=2',
        'http://www.test.com/a/b/c/?test=1&kk=2#hash',
        'http://www.test.com/a/b/c',
        'http://www.test.com/#hash',
        'https://test.cn/#hash',
        'http://www.test.com/',
        'http://test.com/',
        'http://test.com/',
        '/a/b/c#hash/p1/p2/p3/?test=1&kk=2',
        '#hash/p1/p2/p3/?test=1&kk=2',
        '#test?test=1&kk=2',
        '?test=1&kk=2',
        '#hash',
        ''];

    for (var i = 0; i < urlarr.length; i++) {
        var item = urlarr[i];
        var urls = url.get(item);
        console.log(urls);
    }
    console.log('----------------------------');

    for (var j = 0; j < urlarr.length; j++) {
        var item = urlarr[j];
        console.log(url.get(item, true));
    }
    console.log('----------------------------');

    for (var k = 0; k < urlarr.length; k++) {
        var item = urlarr[k];
        console.log(url.getParams(item));
    }
    console.log('----------------------------');

    for (var k = 0; k < urlarr.length; k++) {
        var item = urlarr[k];
        console.log(url.set(item, { seturl1: 1, seturl2: 2 }));
    }
    console.log('----------------------------');

    console.log(url.setParams({ seturl1: 1, seturl2: 2 }));
    console.log(url.setParams({ seturl1: 1, seturl2: 2 }, ':', ','));
});