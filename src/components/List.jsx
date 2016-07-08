import React, { Component, PropTypes } from 'react';
import reactMixin                      from 'react-mixin';
import { ListenerMixin }               from 'reflux';
import Mozaik                          from 'mozaik/browser';

class List extends Component {

    getApiRequest() {
        const {
            url,
            pathText
        } = this.props;

        return {
            id: `list.list.${url}.${pathText}`,
            params: { url, pathText }
        };
    }

    onApiData(value) {
        this.setState(value);
    }

    render() {
        const state = this.state || {};
        const { items = [] } = state;

        return (
            <div>
                <div className="widget__header">
                    Hello <span className="widget__header__subject">World!</span>
                    <i className="fa fa-github-alt" />
                </div>
                <div className="widget__body">
                    <div className="list__wrapper">
                        <ul className="list__list">
                            {items.map((item, index) =>
                                <li className="list__list-item" key={index}>{item}</li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

List.defaultProps = {
    lang:  'en',
    limit: 3
};

reactMixin(List.prototype, ListenerMixin);
reactMixin(List.prototype, Mozaik.Mixin.ApiConsumer);

export default List;
